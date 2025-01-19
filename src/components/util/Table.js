import React from "react";
import { TextField } from "./Widgets.js";
import { TABLE_SIZE } from '../../data/static.js'

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = { rows: this.props.rows, heading: this.props.heading, pagination: new Pagination(1,0, TABLE_SIZE) }

    }
    toEnd() {
        var pagination = this.state.pagination;
        var rowsLength = this.state.rows.length
        if(pagination.to >= rowsLength) return;
        pagination.index = parseInt(parseInt(rowsLength/10)+1)
        pagination.from = parseInt(rowsLength/10) * TABLE_SIZE
        pagination.to = rowsLength
        this.setState({ pagination: pagination })
    }
    toStart() {
        var pagination = this.state.pagination;
        if(pagination.from <=0) return;
        pagination.index = 1
        pagination.from = 0
        pagination.to = TABLE_SIZE
        this.setState({ pagination: pagination })
    }
    next() {
        var pagination = this.state.pagination;
        var rowsLength = this.state.rows.length
        if(pagination.to >= rowsLength) return;
        pagination.index = parseInt(parseInt(pagination.index)+1)
        pagination.from = parseInt(pagination.to)
        pagination.to = parseInt(pagination.to) + TABLE_SIZE
        this.setState({ pagination: pagination })
    }
    prev() {
        var pagination = this.state.pagination;
        if(pagination.from <=0) return;
        var initFrom = pagination.from
        pagination.index = parseInt(parseInt(pagination.index)-1)
        pagination.from = parseInt(pagination.from) - TABLE_SIZE
        pagination.to = parseInt(initFrom)
        this.setState({ pagination: pagination })
    }

    onPageNumChange(event) {
        const target = parseInt(event.target.value); // Get the entered value
        if (isNaN(target) || target < 1) return; // Validate input (positive integers only)
    
        const rowsLength = this.state.rows.length; // Total rows
        const maxPage = Math.ceil(rowsLength / TABLE_SIZE); // Calculate maximum pages
    
        if (target > maxPage) return; // Prevent navigation beyond the last page
    
        const pagination = this.state.pagination;
        pagination.index = target; // Update the current page index
        pagination.from = (target - 1) * TABLE_SIZE; // Calculate the starting index
        pagination.to = Math.min(target * TABLE_SIZE, rowsLength); // Calculate the ending index
        this.setState({ pagination: pagination }); // Update state
    }

    render() {
        var { heading, rows, pagination } = this.state;
        var colspan = parseInt(heading.length/2)
        rows = rows.filter((r, index) => pagination.from <= index && pagination.to > index)
        return (
            <><div className="container mt-4 padding-left-35px padding-right-35px">
                <table className="table table-hover table-sm table-responsive">
                    <thead className="thead-dark">
                        <TabelHeading rows={heading} />
                    </thead>
                    <tbody>
                        {rows.map((row, index) => {
                            return <TableRow index={index} row={row} />
                        })}
                    </tbody>
                    <tfoot class="table-light">
                        <tr>
                            <td colspan={colspan} class="text-start">
                                Total <b>{rows.length}</b> Rows out of <b>{this.props.rows.length}</b>
                            </td>
                            <td colspan={colspan} class="text-end">
                                <span className="padding">
                                    <button className="padding btn header btn-sm" onClick={() => this.toStart()}>&nbsp;&lt;&lt;&nbsp;</button>
                                </span>
                                <span className="padding">
                                    <button className="padding btn header btn-sm"  onClick={() => this.prev()}>&nbsp;&lt;&nbsp;</button>
                                </span> <input type="text" placeholder="Page No?" value={pagination.index}  onChange={(event) => this.onPageNumChange(event)} />
                                <span className="padding">
                                    <button className="padding btn header btn-sm" onClick={() => this.next()}>&nbsp;&gt;&nbsp;</button>
                                </span>
                                <span className="padding">
                                    <button className="padding btn header btn-sm" onClick={() => this.toEnd()}>&nbsp;&gt;&gt;&nbsp;</button>
                                </span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            </>
        )
    }
}

function TabelHeading(props) {
    return (
        <tr>
            {props.rows.map((row, index) => <th className="header" key={index}>{row.toUpperCase()}</th>)}
        </tr>
    )
}

function TableRow(props) {
    const { row, index } = props;
    return (
        <tr key={index}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    )

}

class Pagination {
    constructor(index,from, to) {
        this.index = index;
        this.from = from;
        this.to = to;
    }
}