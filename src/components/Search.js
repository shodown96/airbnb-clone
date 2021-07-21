import React, {useState} from 'react';
import '../css/Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

// DATE PICKER COMPONENT
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const handleChange = () => {}

    return (
        <div className='search'>
            <div className="search__card">
                <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
                <div className="search__info pt-10">
                    <h2 className="mb-100">Number of guests <PeopleIcon /></h2>
                    <input min={0} defaultValue={2} type="number" onChange={handleChange} />
                    <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
                </div>
            </div>
        </div>
    )
}

export default Search
