import React, {Component} from 'react';

export default class Grid extends Component{
    render() {
        return (
            <div>
                <table>
                    {this.renderTableHeader()}
                    {this.renderTableBody()}
                </table>
            </div>
        );
    }

    renderTableHeader() {
        return (
          <thead>
            <tr>
                <th>Col 1</th>
                <th>Col 2</th>
            </tr>
          </thead>
        );
    }

    renderTableBody() {
        return (
          <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
            </tr>
          </tbody>
        );
    }
}