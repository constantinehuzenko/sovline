import { data } from "store/data";

export const WrongAnswers = () => {
  const getLocalStore = localStorage.getItem("HackYI_APP_wrong");
  const parseLocalStore = getLocalStore && JSON.parse(getLocalStore);

  const getDataOfWrong = data.filter((el) => {
    return parseLocalStore.includes(el.id);
  });

  return (
    <div>
      {getDataOfWrong.length &&
        getDataOfWrong?.map((el) => (
          <div key={el.id} style={{ marginBottom: "8px" }}>
            {el.header} {el.id}
          </div>
        ))}
    </div>
  );
};
