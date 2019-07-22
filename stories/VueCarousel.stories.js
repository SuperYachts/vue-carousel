/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import VueCarousel from '../src/VueCarousel';
import TestItem from '../src/TestItem';
import TestContainer from '../src/TestContainer';

storiesOf('VueCarousel', module)
    .add('test', () => ({
        components: {
            VueCarousel,
            TestItem,
            TestContainer,
        },

        template: `
            <div>
                <button @click="$refs.carousel.move(-1)">Previous</button>
                <button @click="$refs.carousel.move(1)">Next</button>

                <test-container>
                    <vue-carousel ref="carousel" :items="items">
                        <template v-slot="{ item }">
                            <test-item>{{ item }}</test-item>
                        </template>
                    </vue-carousel>
                </test-container>
            </div>
        `,

        methods: {
            action: action('clicked'),
        },

        props: {
            items: {
                type: Array,
                default() {
                    return [1, 2, 3, 4, 5];
                },
            },
        },
    }));
