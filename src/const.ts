export const DEFAULT_SECONDARY_INFO = [
  "entity-id",
  "entity_id",
  "last-changed",
  "last_changed",
  "last-updated",
  "last_updated",
  "last-triggered",
  "last_triggered",
  "position",
  "tilt-position",
  "tilt_position",
  "brightness",
];

// language=CSS
export const VERTICAL_STACK_IN_CARD_STYLE = `
    #root > *:not(:first-child) {
      margin-top: -24px;
    }
`;

export const NO_CARD_STYLE = {
  boxShadow: "none",
  background: "none",
  border: "none",
};
