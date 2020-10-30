import * as React from "react";
import { debounce } from "lodash";

interface SearchCriteriaProps {
  placeholder: string;
  doSearch: (criteria: string) => void;
}
interface SearchCriteriaState {
  criteria: string;
}

class SearchCriteria extends React.Component<
  SearchCriteriaProps,
  SearchCriteriaState
> {
  raiseDoSearchWhenUserStoppedTyping = debounce(() => {
    this.props.doSearch(this.state.criteria);
    console.log(`doSearch(${this.state.criteria})`);
  }, 300);

  constructor() {
    super();

    this.state = {
      criteria: ""
    };
  }

  handleCriteriaChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ criteria: e.currentTarget.value }, () => {
      this.raiseDoSearchWhenUserStoppedTyping();
    });
  };

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.criteria}
          onChange={this.handleCriteriaChange}
          className="form-control"
        />
      </div>
    );
  }
}

export default SearchCriteria;
