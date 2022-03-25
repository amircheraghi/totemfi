import React, { useEffect, useState } from "react";
import Button from "../../Modules/Button";
import { getPreditions } from "../../Server";
import Prediction from "../Prediction/Prediction";

//Modules
import Loading from "./../../Modules/Loading";

//Styles
import {
    Body,
    NothingBox,
    LoadMoreBox,
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
    let [showNum, setShowNum] = useState(6);

    useEffect(async () => {
        let { data } = await getPreditions();
        setPredictions(data);
    });

    let predcitionFilter = () => {
        if (predictions) {
            return predictions.filter((item) =>
                activeTab == "All" ? true : item.state === activeTab
            );
        }
    };

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
                    </SorterValues>
                </Sorter>
            </Navigator>
            <View sty={predictions ? predcitionFilter().length : 0}>
                {/* Show Predictions */}
                {predictions
                    ? predcitionFilter().map((item, index) =>
                          index < showNum ? (
                              <Prediction
                                  sty={
                                      predictions
                                          ? predcitionFilter().length
                                          : 0
                                  }
                                  key={(Math.random(50) + index).toString()}
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
                          ) : null
                      )
                    : null}

                {/* Load More Button */}
                {predictions &&
                predcitionFilter().length > 6 &&
                showNum <= predcitionFilter().length ? (
                    <LoadMoreBox>
                        <Button
                            text="Load More"
                            background="#232831"
                            width="400px"
                            padding="10px 20px"
                            radius="8px"
                            color="#909090"
                            onClick={() => setShowNum(showNum + 6)}
                        />
                    </LoadMoreBox>
                ) : null}

                {/* Loading */}
                {predictions && predcitionFilter().length > 0 ? null : (
                    <NothingBox>
                        {predictions && predcitionFilter().length == 0 ? (
                            "There is no available pool"
                        ) : (
                            <Loading
                                type="cylon"
                                color="#909090"
                                width="60px"
                            />
                        )}
                    </NothingBox>
                )}
            </View>
        </Body>
    );
};

export default Main;
