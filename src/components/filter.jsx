export function Filter({pokeArray, filterName, filterType, filterWeakness, setFilterName, setFilterType, setFilterWeakness }){
    const arrayType = [];

    function getPokeTypes() {
        pokeArray.map((element) => {
            element.type.map((element) => {
                if(!arrayType.includes(element)) {
                    arrayType.push(element);
                }
            });
        });
    }
    getPokeTypes();

    function submitFilter(event){
        event.preventDefault();
        setFilterName(() => {
            return document.getElementById("selectName").value;
        })
        setFilterType(() => {
            return document.getElementById("selectType").value;
        })
        setFilterWeakness(() => {
            return document.getElementById("selectWeakness").value;
        })
    }

    return (
        <form onSubmit={submitFilter}>
            <div className="filter-group">
                <div>
                    <label htmlFor="selectName">Select Pokemon by Name</label>
                    <select id="selectName">
                        <option value="">Select an Option</option>
                        {pokeArray.map((element) => {
            return <option key={element.id + element.name} value={element.name}>{element.name}</option>
          })}
                    </select>
                </div>
                <div>
                    <label htmlFor="selectType">Select Pokemon by Type</label>
                    <select id="selectType">
                        <option value="">Select an Option</option>
                        {arrayType.map((element) => {
                            return <option key={element} value={element}>{element}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="selectWeakness">Select Pokemon by Weakness</label>
                    <select id="selectWeakness">
                        <option value="">Select an Option</option>
                        {arrayType.map((element, index) => {
                            return <option key={element + index} value={element}>{element}</option>
                        })}
                    </select>
                </div>
            </div>
            <button type="submit">Filter</button>
        </form>
    );

}
