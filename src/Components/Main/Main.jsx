import React, { useEffect, useState } from "react";
import Button from "../../Modules/Button";
import { getPreditions } from "../../Server";
import Prediction from "../Prediction/Prediction";

//Modules

//Styles
import {
    Body,
    Navigator,
    Sorter,
    SorterValue,
    SorterValues,
    Tabs,
    View,
} from "./Styled";

const Main = () => {
    let [activeTab, setActiveTab] = useState("All");
    let [activeSorter, setActiveSorter] = useState("Maturity");

    let [predictions, setPredictions] = useState(null);

    useEffect(async () => {
        let { data } = await getPreditions();
        setPredictions(data);
    });

    return (
        <Body>
            <Navigator>
                <Tabs>
                    <Button
                        text="All"
                        background={activeTab == "All" ? "#232831" : "#222"}
                        color={activeTab == "All" ? "#fff" : "#909090"}
                        radius="8px"
                        padding="10px 20px"
                        margin="5px"
                        onClick={() => setActiveTab("All")}
                    />
                    <Button
                        text="Upcoming"
                        background={
                            activeTab == "Upcoming" ? "#232831" : "#222"
                        }
                        color={activeTab == "Upcoming" ? "#fff" : "#909090"}
                        radius="8px"
                        padding="10px 20px"
                        margin="5px"
                        onClick={() => setActiveTab("Upcoming")}
                    />
                    <Button
                        text="Open"
                        background={activeTab == "Open" ? "#232831" : "#222"}
                        color={activeTab == "Open" ? "#fff" : "#909090"}
                        radius="8px"
                        padding="10px 20px"
                        margin="5px"
                        onClick={() => setActiveTab("Open")}
                    />
                    <Button
                        text="In Progress"
                        background={
                            activeTab == "In Progress" ? "#232831" : "#222"
                        }
                        color={activeTab == "In Progress" ? "#fff" : "#909090"}
                        radius="8px"
                        padding="10px 20px"
                        margin="5px"
                        onClick={() => setActiveTab("In Progress")}
                    />
                </Tabs>
                <Sorter>
                    Sorted By
                    <SorterValues
                        onChange={(event) =>
                            setActiveSorter(event.target.value)
                        }
                    >
                        <SorterValue>Maturity</SorterValue>
                        <SorterValue>NotFound</SorterValue>
                    </SorterValues>
                </Sorter>
            </Navigator>
            <View>
                {predictions ?
                    predictions.map((item) => (
                        <Prediction
                            token={item.pair[0]}
                            tokenImages={{
                                imgOne: `/assets/Images/Currencies/${item.pair[0]}.png`,
                                imgTwo: `/assets/Images/Currencies/${item.pair[1]}.png`,
                            }}
                            state={item.state}
                            targetDate={item.targetDate}
                            progressValues={{
                                value: item.filledValue,
                                total: item.totalValue,
                            }}
                        />
                    )) : null
                }
            </View>
        </Body>
    );
};

export default Main;
