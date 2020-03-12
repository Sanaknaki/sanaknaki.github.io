import React from 'react';

import { Pagination } from 'react-bootstrap'

import '../../../css/google.css';

class AliNation extends React.Component {
    render() {
        return (
            <Pagination className="text-center">
                <Pagination.Item key={1} active={false}>
                    <span className="pagination-name start">A</span>
                </Pagination.Item>
                <Pagination.Item key={2} active={true}>
                    <span className="pagination-name middle">l</span>
                    <br />
                    <span className="index">1</span>
                </Pagination.Item>
                <Pagination.Item key={3} active={false}>
                    <span className="pagination-name middle">l</span>
                    <br />
                    <span className="index">2</span>
                </Pagination.Item>
                <Pagination.Item key={4} active={false}>
                    <span className="pagination-name middle">l</span>
                    <br />
                    <span className="index">3</span>
                </Pagination.Item>
                <Pagination.Item key={5} active={false}>
                    <span className="pagination-name middle">l</span>
                    <br />
                    <span className="index">4</span>
                </Pagination.Item>
                <Pagination.Item key={6} active={false}>
                    <span className="pagination-name middle">l</span>
                    <br />
                    <span className="index">5</span>
                </Pagination.Item>
                <Pagination.Item key={7} active={false}>
                    <span className="pagination-name end">i</span>
                </Pagination.Item>
            </Pagination>
        );
    }
}

export default AliNation;
