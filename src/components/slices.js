import React from "react";

import Blob from "../components/common/blob";
import Flier from "../components/common/flier";
import FlierContainer from "../components/common/flier/container";
import SectionHeader from "../components/common/section-header";
import Spread from "../components/common/spread";
import SpreadLead from "../components/common/spread/lead";
import Tile from "../components/common/tile";
import TileContainer from "../components/common/tile/container";

const Slices = ({ slices }) => (
  <>
    {slices.map((slice, i) => {
      let content;

      switch (slice.type) {
        case "spread":
          content = (
            <div key={i}>
              <SectionHeader level="2">
                {slice.title}
              </SectionHeader>
              <Spread
                key={i}
                lead={slice.lead ? <SpreadLead>{slice.lead}</SpreadLead> : null}
                figure={slice.figure}
                cta={slice.cta}
              >
                {slice.content}
              </Spread>
            </div>
          );
        break;
        case "flier":
          content = (
            <div key={i}>
              <FlierContainer>
                <Flier title={slice.title} figure={slice.figure} cta={slice.cta}>
                  {slice.content}
                </Flier>
              </FlierContainer>
            </div>
          );
        break;
        case "tiles":
          content = (
            <div key={i}>
              <SectionHeader level="2">
                {slice.title}
              </SectionHeader>
              <TileContainer>
                {slice.tiles.map((tile, i) => (
                  <Tile
                    key={i}
                    title={tile.title}
                    subtitle={tile.subtitle}
                    figure={tile.figure}
                    type={tile.type}
                    cta={tile.cta}
                  >
                    {tile.content}
                  </Tile>
                ))}
              </TileContainer>
            </div>
          );
        break;
        default:
          content = (
            <Blob key={i} heading={slice.title} cta={slice.cta}>
              {slice.content}
            </Blob>
          );
        break;
      }

      return content;
    })}
  </>
);

export default Slices;
