import React, { Component } from 'react'
import Coin from './coin'
import Pagination from './pagination'


class CoinsList extends Component {

    state = {
        currentPage: 1,
        postsPerPage: 4,
    }


    componentDidMount() {
        if (this.props.moun) {
            const { moun } = this.props
            moun()
        }
    }

    paginate = (pageNumber) => {
        this.setState({ currentPage: pageNumber });

    }

    selectValue = (e) => {
        this.setState({ postsPerPage: e.target.value })
    }


    render() {
        const data = this.props.data;
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
      

        return (
            <>
                <div className='pagin-blk'>
                    <Pagination postsPerPage={this.state.postsPerPage} totalPosts={data.length} paginate={this.paginate} currentPage={this.state.currentPage} />
                    <div>
                        <label htmlFor="20">Page Elements</label>
                        <select onChange={this.selectValue} id='20' className='select-opt-box'>
                            <option>4</option>
                            <option>6</option>
                            <option>10</option>
                        </select>
                    </div>
                </div>
                <div className="list-block">
                    {currentPosts.map((item) => {
                        return (
                            <Coin key={item.id} avers={item.avers}
                                header={item.header}
                                shortDescription={item.shortDescription}
                                id={item.id} deleteHandler={this.props.deleteHandler}
                                token={this.props.token}
                                editItem={this.props.editItem} />)
                    })}

                </div>

            </>
        )
    }
}


export default CoinsList