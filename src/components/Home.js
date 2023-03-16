import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import LineChartMain from "./chart/linechart/LineChartMain";
import RadarChartMain from "./chart/radarchart/RadarChartMain";
import HorizontalBarChart from "./chart/barchart/HorizontalBarChart";
import BubbleChart from "./chart/bubblechart/BubbleChart";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import BubbleChartMain from "./chart/bubblechart/BubbleChartMain";
import CandleStickChart from "./chart/candlestickchart/CandleStickChart";
import { SliderThumb } from "@mui/material/Slider";
import EarningBar from "./earningsection/EarningBar";

function Home() {
  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }

  AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <h1 className={styles.headTitle} variant="h1" component="h2">
        GOOGLE <span className={styles.headTitleThin}>MSFT</span>
      </h1>
      <div className={styles.hrSaperator}></div>
      <Grid container spacing={3} marginTop={1}>
        <Grid item xs>
          <div className={styles.gridCard}>
            <div className={styles.gridCardHeader}>Name of Event</div>
            <div className={styles.gridCardContent}>
              Q1 2023 Quarterly Earnings Call
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className={styles.gridCard}>
            <div className={styles.gridCardHeader}>Date of Event</div>
            <div className={styles.gridCardContent}>January 24th 2023</div>
          </div>
        </Grid>
        <Grid item xs>
          <div className={styles.gridCard}>
            <div className={styles.gridCardHeader}>Quality of Audio</div>
            <div
              className={`${styles.gridCardContent} ${styles.gridCardContentActive}`}
            >
              High Quality
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className={styles.gridCard}>
            <div className={styles.gridCardHeader}>Chief Executive Officer</div>
            <div className={styles.gridCardContent}>Satya Nadella</div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} marginTop={1}>
        <Grid item xs>
          <div className={styles.gridCard}>
            <div className={styles.gridCardHeader}>Duration of Call</div>
            <div className={styles.gridCardContent}>
              53 minutes and 44 Seconds
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className={styles.gridCard}>
            <div className={styles.gridCardHeader}>Duration of PR</div>
            <div className={styles.gridCardContent}>
              31 minutes and 12 Seconds
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className={styles.gridCard}>
            <div className={styles.gridCardHeader}>Duration of Q&A</div>
            <div className={styles.gridCardContent}>
              22 minutes and 32 Seconds
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className={styles.gridCard}>
            <div className={styles.gridCardHeader}>Topics</div>
            <div
              className={`${styles.gridCardContent} ${styles.gridCardContentActive}`}
            >
              AI Race, Inflation
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.hrSaperator}></div>
      <h1 className={styles.subTitle} variant="h1" component="h2">
        EARNINGS POLYGRAPH
      </h1>
      <EarningBar />
      <Grid container spacing={3} marginTop={1}>
        <Grid item xs>
          <div className={styles.gridCardLarge}>
            <div className={styles.gridCardHeaderInner}>
              People invest in people
            </div>
            <div className={styles.gridCardContentInner}>
              Voice tone analysis is an important tool for understanding the
              leadership team of a public company. It can provide insights into
              the sentiment and confidence of the team, and can be used to
              assess the team s behavior and performance. In particular, voice
              tone analysis can help detect subtle clues in the leadership team
              s speech that could reveal potential problems or weaknesses in the
              company. Additionally, voice tone analysis can be used to gauge
              the team s emotional state and can provide valuable insights into
              the team s overall performance.
            </div>
            <div>
              <table className={styles.tableMain}>
                <tbody>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Position</th>
                    <th>Tenure at Company</th>
                    <th>Previous Position</th>
                  </tr>
                  <tr>
                    <td className={styles.tdFirst}>01</td>
                    <td>Satya Nadella</td>
                    <td>47</td>
                    <td>Chairman and Chief Executive Officer</td>
                    <td>6 years</td>
                    <td>
                      Executive Vice President of Microsoft’s Cloud and
                      Enterprise group.
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.tdFirst}>02</td>
                    <td>Judson Althoff</td>
                    <td>53</td>
                    <td>
                      Executive Vice President and Chief Commercial Officer
                    </td>
                    <td>7 years</td>
                    <td>President of Microsoft North America.</td>
                  </tr>
                  <tr>
                    <td className={styles.tdFirst}>03</td>
                    <td>Chris Capossela </td>
                    <td>51</td>
                    <td>
                      Executive Vice President and Chief Marketing Officer
                    </td>
                    <td>4 years</td>
                    <td>
                      Corporate Vice President of Microsoft’s Consumer Channels
                      Group.
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.tdFirst}>04</td>
                    <td>Kathleen Hogan</td>
                    <td>53</td>
                    <td>Executive Vice President and Chief People Officer</td>
                    <td>4 years</td>
                    <td>
                      Corporate Vice President of Microsoft’s Human Resources
                      group.
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.tdFirst}>05</td>
                    <td>Amy Hood</td>
                    <td>45</td>
                    <td>Executive Vice President and Chief People Officer</td>
                    <td>7 years</td>
                    <td>
                      Chief Financial Officer of Microsoft Global Business
                      Services.
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.tdFirst}>06</td>
                    <td>Jean Philippe Courtois </td>
                    <td>58</td>
                    <td>
                      Executive Vice President and President, Microsoft Global
                      Sales, Marketing and Operations
                    </td>
                    <td>3 years</td>
                    <td>President of Microsoft International.</td>
                  </tr>
                  <tr>
                    <td className={styles.tdFirst}>07</td>
                    <td>Brad Smith</td>
                    <td>58</td>
                    <td>President and Chief Legal Officer</td>
                    <td>18 years</td>
                    <td>Senior Vice President and General Counsel.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} marginTop={1}>
        <Grid item xs>
          <div className={styles.gridCardLarge}>
            <div className={styles.gridCardHeaderInner}>The Unheard Truth</div>
            <div className={styles.lineChartParentBlock}>
              <LineChartMain />
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3} marginTop={1}>
        <Grid item xs>
          <div className={styles.gridCardLarge}>
            <div className={styles.gridCardHeaderInner}>
              Confidence in the Company s Future
            </div>
            <div className={styles.gridCardContentInner}>
              Across 18 key models, the projection of future performance is
              mapped across 0,30,60 and 90 days. Consensus among the models is
              the best outcome.
            </div>
            <div className={styles.candleChartParentBlock} >
              <CandleStickChart />
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className={styles.gridCardLarge}>
            <div className={styles.gridCardHeaderInner}>
              Emotional State of Leadership
            </div>
            <div className={styles.gridCardContentInner}>
              Satya Nadella: Confident (65.4%), Happy (32.1%)
            </div>
            <div className={styles.radarChartParentBlock}>
              <RadarChartMain />
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3} marginTop={1}>
        <Grid item xs>
          <div className={styles.gridCardLarge}>
            <div className={styles.gridCardHeaderInner}>
              Industry Volatility vs Company
            </div>
            <div className={styles.barChartParentBlock}>
              <HorizontalBarChart />
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className={styles.gridCardLarge}>
            <div className={styles.gridCardHeaderInner}>
              Competitor Analysis
            </div>
            <div className={styles.bubbleChartParentBlock}>
              <BubbleChartMain />
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3} marginTop={1}>
        <Grid item xs>
          <div className={styles.gridCardLarge}>
            <div className={styles.gridCardHeaderInner}>
              Key Topics discussed
            </div>
            <div className={styles.gridCardSubHeaderInner}>
              Satya Nadella: AI race
            </div>
            <div className={styles.gridCardContentInner}>
              <p className={styles.paraContent}>
                The key topics discussed in Microsoft's last quarterly earnings
                call (Q2 2023) include:
              </p>
              <p className={styles.paraContent}>
                Financial performance and outlook, cloud business performance,
                device execution challenges, workforce and cost optimization and
                strategic investments. Additionally, Microsoft discussed its
                non-GAAP financial measures, as well as its strategy to focus on
                growing its cloud business, building new products and services,
                and continuing to invest in its people, technology, and
                infrastructure.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs>
          <div className={styles.gridCardLarge}>
            <div className={styles.gridCardHeaderInner}>
              Helios Quantitative Highlight
            </div>

            <div className={styles.gridCardContentInner}>
              <ul>
                <li>
                  Our entire analysis is generated from our Comprehend AI voice
                  engine.
                </li>
                <li>
                  This engine has been licensed by some of the world s largest
                  quantitative hedge funds and used in academic research
                  globally.
                </li>
                <li>
                  The following graphic showcases the most hesitant response
                  from all speakers to a question. Hesitancy has been described
                  as the canary in the coal mine for understanding what one is
                  responding with. The spectrogram representation showcases just
                  how much more is available from our enterprise API offering.
                </li>
                <li>
                  Each millisecond of audio is available to our enterprise
                  clients.
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
