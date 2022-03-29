export const getPreditions = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data : [
                    {
                        pair: ['BNB', 'SUP'],
                        state: 'Open',
                        targetDate: 1650356480,
                        filledValue: 119273,
                        totalValue: 255000
                    },
                    {
                        pair: ['BTC', 'SUP'],
                        state: 'Open',
                        targetDate: 1649895980,
                        filledValue: 1000,
                        totalValue: 3000
                    },
                    {
                        pair: ['ETH', 'SUP'],
                        state: 'Completed',
                        targetDate: 1642356480,
                        filledValue: 200,
                        totalValue: 9000
                    },
                    {
                        pair: ['BTC', 'SUP'],
                        state: 'Completed',
                        targetDate: 1641356480,
                        filledValue: 11270,
                        totalValue: 24000
                    },
                    {
                        pair: ['BNB', 'SUP'],
                        state: 'Completed',
                        targetDate: 1641356480,
                        filledValue: 1000,
                        totalValue: 3000
                    },
                    {
                        pair: ['ETH', 'SUP'],
                        state: 'Completed',
                        targetDate: 1642356480,
                        filledValue: 200,
                        totalValue: 9000
                    },
                    {
                        pair: ['BTC', 'SUP'],
                        state: 'Completed',
                        targetDate: 1641356480,
                        filledValue: 11270,
                        totalValue: 24000
                    }
                ]
            })
        }, 2000);
    })
}
