import React from "react";
import { TextField } from "./Widgets.js";
import { TABLE_SIZE } from '../../data/static.js'

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = { rows: this.props.rows, heading: this.props.heading, pagination: new Pagination(0, TABLE_SIZE) }

    }
    toEnd() {
        var pagination = this.state.pagination;
        var rowsLength = this.state.rows.length
        if(pagination.to >= rowsLength) return;
        pagination.from = parseInt(rowsLength/10) * TABLE_SIZE
        pagination.to = rowsLength
        this.setState({ pagination: pagination })
    }
    toStart() {
        var pagination = this.state.pagination;
        if(pagination.from <=0) return;
        pagination.from = 0
        pagination.to = TABLE_SIZE
        this.setState({ pagination: pagination })
    }
    next() {
        var pagination = this.state.pagination;
        var rowsLength = this.state.rows.length
        if(pagination.to >= rowsLength) return;
        pagination.from = parseInt(pagination.to)
        pagination.to = parseInt(pagination.to) + TABLE_SIZE
        this.setState({ pagination: pagination })
    }
    prev() {
        var pagination = this.state.pagination;
        if(pagination.from <=0) return;
        var initFrom = pagination.from
        pagination.from = parseInt(pagination.from) - TABLE_SIZE
        pagination.to = parseInt(initFrom)
        this.setState({ pagination: pagination })
    }
    render() {
        console.log("re-render triggered...!")
        var { heading, rows, pagination } = this.state;
        rows = rows.filter((r, index) => pagination.from <= index && pagination.to > index)
        return (
            <><div className="container mt-4 padding-left-35px padding-right-35px">
                <table className="table table-striped table-bordered">
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
                            <td colspan="3" class="text-start">
                                Total <b>{rows.length}</b> Rows out of <b>{this.props.rows.length}</b>
                            </td>
                            <td colspan="3" class="text-end">
                                <span className="padding">
                                    <button className="padding btn btn-primary btn-sm" onClick={() => this.toStart()}>&nbsp;&lt;&lt;&nbsp;</button>
                                </span>
                                <span className="padding">
                                    <button className="padding btn btn-primary btn-sm"  onClick={() => this.prev()}>&nbsp;&lt;&nbsp;</button>
                                </span><TextField value="1" default="1" />
                                <span className="padding">
                                    <button className="padding btn btn-primary btn-sm" onClick={() => this.next()}>&nbsp;&gt;&nbsp;</button>
                                </span>
                                <span className="padding">
                                    <button className="padding btn btn-primary btn-sm" onClick={() => this.toEnd()}>&nbsp;&gt;&gt;&nbsp;</button>
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
            {props.rows.map((row, index) => <th key={index}>{row.toUpperCase()}</th>)}
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
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}