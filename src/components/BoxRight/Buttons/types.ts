/* eslint-disable camelcase */
export interface IProps {
  page: number;
  totalPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  updateList: () => 0 | void[];
}
