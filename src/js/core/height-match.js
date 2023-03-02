import Resize from '../mixin/resize';
import { getRows } from './margin';
import { $$, boxModelAdjust, css, dimensions, isVisible } from 'uikit-util';

export default {
    mixins: [Resize],

    args: 'target',

    props: {
        target: String,
        row: Boolean,
    },

    data: {
        target: '> *',
        row: true,
    },

    computed: {
        elements: {
            get({ target }, $el) {
                return $$(target, $el);
            },

            watch() {
                this.$reset();
            },
        },
    },

    resizeTargets() {
        return [this.$el, ...this.elements];
    },

    update: {
        read() {
            return {
                rows: (this.row ? getRows(this.elements) : [this.elements]).map(match),
            };
        },

        write({ rows }) {
            for (const { heights, elements } of rows) {
                elements.forEach((el, i) => css(el, 'minHeight', heights[i]));
            }
        },

        events: ['resize'],
    },
};

function match(elements) {
    if (elements.length < 2) {
        return { heights: [''], elements };
    }

    let heights = elements.map(getHeight);
    const max = Math.max(...heights);

    return {
        heights: elements.map((el, i) => (heights[i].toFixed(2) === max.toFixed(2) ? '' : max)),
        elements,
    };
}

function getHeight(element) {
    let display = false;
    const minHeight = element.style.minHeight;
    if (!isVisible(element)) {
        display = element.style.display;
        css(element, 'display', 'block', 'important');
    }

    css(element, 'minHeight', '');
    const height = dimensions(element).height - boxModelAdjust(element, 'height', 'content-box');
    css(element, 'minHeight', minHeight);

    if (display !== false) {
        css(element, 'display', display);
    }

    return height;
}
