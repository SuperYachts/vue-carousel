/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import VueCarousel from '../src/VueCarousel';
import TestItem from '../src/TestItem';
import TestContainer from '../src/TestContainer';

import image from './image.png';

storiesOf('VueCarousel', module)
    .addDecorator(withKnobs)
    .add('test', () => ({
        components: {
            VueCarousel,
            TestItem,
            TestContainer,
        },

        template: `
            <div style="height: 200vh;">
                <button @click="$refs.carousel.move(-1)">Previous</button>
                <button @click="$refs.carousel.move(1)">Next</button>

                <test-container>
                    <vue-carousel
                        ref="carousel"
                        :items="items"
                        :number-in-view="numberInView"
                        :center="center"
                        :value="value"
                        @input="input"
                    >
                        <template v-slot="{ item }">
                            <test-item @click.native="click(item)">
                                {{ item }}

                                <img :src="image" />
                            </test-item>
                        </template>
                    </vue-carousel>
                </test-container>
            </div>
        `,

        methods: {
            input: action('input'),
            click: action('click'),
        },

        props: {
            image: {
                type: String,
                default: image,
            },

            value: {
                type: Number,
                default: number('Value', 0),
            },

            items: {
                type: Array,
                default() {
                    return Array(number('Number of items', 5)).fill(0).map((_, index) => index);
                },
            },

            numberInView: {
                type: Number,
                default: number('Number in view', 1),
            },

            center: {
                type: Boolean,
                default: boolean('Center', false),
            },
        },
    }));
