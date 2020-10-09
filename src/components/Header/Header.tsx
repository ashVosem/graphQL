import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import CameraIcon from "@material-ui/icons/Camera";
import { useState } from "react";
import { ThemeOptions } from "@material-ui/core/styles";

import withHeader from "./HeaderHOC";

type Props = {
  classes: {
    root: string;
  };
  theme: ThemeOptions;
};

type ContainerProps = {
  children: React.ReactElement;
  dir: string | undefined;
};

const TabContainer: React.FC<ContainerProps> = ({ children, dir }) => (
  <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
);

const SimpleTabs: React.FC<Props> = ({ classes, theme }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (
    event: React.SyntheticEvent<EventTarget>,
    value: number
  ) => {
    setValue(value);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Movies" icon={<CameraIcon />} />
          <Tab label="Directors" icon={<MovieCreationIcon />} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <p>A</p>
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <p>B</p>
        </TabContainer>
      </SwipeableViews>
    </div>
  );
};

export default withHeader(SimpleTabs as React.FC);
