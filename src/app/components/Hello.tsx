'use client'
import {
    Card,
    Metric,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    BarList,
    Text,
} from '@tremor/react'
import { useState } from 'react'

const runners = [
    {
        id: 1,
        name: 'Lena',
        data: [
            { name: 'Running', value: 45 },
            { name: 'Paddle tennis', value: 35 },
            { name: 'Functional strength', value: 71 },
            { name: 'Yoga', value: 120 },
            { name: 'Cycling', value: 91 },
        ],
    },
    {
        id: 2,
        name: 'Emma',
        data: [
            { name: 'Super Cycle', value: 15 },
            { name: 'Squash', value: 35 },
            { name: 'Volleyball', value: 71 },
            { name: 'Running', value: 120 },
            { name: 'Treadmill', value: 41 },
        ],
    },
    {
        id: 3,
        name: 'Leon',
        data: [
            { name: 'Tennis', value: 28 },
            { name: 'Trail running', value: 29 },
            { name: 'Super cycle', value: 23 },
            { name: 'Yoga', value: 34 },
            { name: 'Hiking', value: 12 },
        ],
    },
]

const valueFormatter = (number: number) =>
    `${Intl.NumberFormat('us').format(number).toString()}h`

export default function Hello() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <Card>
            <Text>Activity Summary</Text>
            <Metric className="mt-2">300.2 hours</Metric>
            <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
                <TabList variant="line">
                    <Tab>Lena</Tab>
                    <Tab>Emma</Tab>
                    <Tab>Leon</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div
                            className="relative border pl-2 py-2 pr-4 border-dashed rounded-lg
                                border-slate-400"
                        >
                            <div
                                className="absolute top-0 right-2.5 px-2 -translate-y-1/2 bg-white text-sm
                                    font-normal text-slate-400"
                            >
                                BarList
                            </div>
                            <BarList
                                data={
                                    runners.filter(
                                        (runner) => runner.id === 1
                                    )[0].data
                                }
                                valueFormatter={valueFormatter}
                                showAnimation={false}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div
                            className="relative border pl-2 py-2 pr-4 border-dashed rounded-lg
                                border-slate-400"
                        >
                            <div
                                className="absolute top-0 right-2.5 px-2 -translate-y-1/2 bg-white text-sm
                                    font-normal text-slate-400"
                            >
                                BarList
                            </div>
                            <BarList
                                data={
                                    runners.filter(
                                        (runner) => runner.id === 2
                                    )[0].data
                                }
                                valueFormatter={valueFormatter}
                                showAnimation={false}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div
                            className="relative border pl-2 py-2 pr-4 border-dashed rounded-lg
                                border-slate-400"
                        >
                            <div
                                className="absolute top-0 right-2.5 px-2 -translate-y-1/2 bg-white text-sm
                                    font-normal text-slate-400"
                            >
                                BarList
                            </div>
                            <BarList
                                data={
                                    runners.filter(
                                        (runner) => runner.id === 3
                                    )[0].data
                                }
                                valueFormatter={valueFormatter}
                                showAnimation={false}
                            />
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </Card>
    )
}
