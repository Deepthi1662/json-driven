import Accordian from "./Accordian";

const MainContent = ({response}) => {
    return(
        <div className="flex-1 overflow-auto p-4" key="mainContent">
          <div className="space-y-4">
            {response && response.map((element, index) => {
              if (element?.type === 'Accordion') {
                return (
                  <Accordian key={`Accordian-${index}`} data={element?.values} />
                );
              }
              return null;
            })}
          </div>
        </div>
    );
}

export default MainContent;