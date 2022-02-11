/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
/* eslint-disable no-return-assign */
/* eslint-disable yoda */
export const uniqId = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (match, r) =>
    ("x" == match ? (r = (Math.random() * 16) | 0) : (r & 0x3) | 0x8).toString(
      16
    )
  );
