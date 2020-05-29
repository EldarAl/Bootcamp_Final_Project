import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'



class CoinInfo extends Component {
    state={
        data: [],
    }
    componentDidMount=()=>{
        this.getData()
    }
   getData = async () => {
        const res = await fetch(`http://localhost:3005/list/${this.props.id.id}`)
        const body = await res.json()
        this.setState({data: body[0]})
    }
    render() {
        // console.log()
        return (
            <div className="info-cont">
                {/* <button onClick={()=>this.props.history.goBack()}>Back</button> */}
                <img onClick={()=>this.props.history.goBack()} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAbFBMVEX///9wMKBnG5vNvtx4PqVvLZ9pH5xrJJ3Qwd5mF5plFZr8+/1qI51tKZ/TxeByMqFiCZjBrdR3PKRjDJh0N6PJuNmadbrAq9O7pdC3n817RadcAJX49vqUbLaXcbjLutqee7zZzeWqjcSxmMmQJ12QAAACaklEQVR4nO3ciVLbMBRAUWRHMdlMoLhlJy3//484tHRMYi3WjCTrcc8XKHfyJrEt6+ICAAAAAAAAAAAAAAAAAAAAAADg29vkXkCR2kPuFZSofXh8yr2G8rQP632dexHF6avp5jn3KkrTLtZa6YofhUkuj9WU+nGZeyFF+VdNNS+5V1KSz2pKL5lSb/XN6m81pnSCQTWm1NuwGlPqq74dVOuntM29oCK8fq2mmp+5V1SC02pKb5lSp+60mlJ7ptSlu6pOqzGlTt3V2Xetn9KGKbUardZP6e/cC5u1Tp1P6MeUHnKvbM5M1ZhSm04bqjGlFtfmamp7yL26ubJVU3qXe3kzdb2zVGNKDRzVmNJRrmpK3+Ze4gw5qym1+9PWBUh5J/pX46x2DFeVQKertl16VCvFIlW1RlK1VN2kVUvT7W4prVqKbhKrxe8ms1rsblKrxe12V0mtFrPbfbXM/eEiitRtI7tapG7iq0Xp9vS2kl4tUrc13YJs5H/jov0uCC8X7X+I8HIR//eKLhf1Okvw/5HI1/ViyyW4jySyXJL7lgKv79PcJ5d3PynVcxlp5VJ1k1YuXbe+nNcTVJ47n/N4Hsg+h7By7KsxcO13YB+XCfsGQ1nLsU/VwlaOSbWxlGNSrYzlmFQH0358JtXFUI5JdRp934g3tDyMvd/Ge7s+Rt5C5T1xL2flmFRPp2/ZM6m+Os5dCfTlFBHO+ZlgWI5zpaYYnJLEpE7y/zvHpE70eZ4ZkzpVvVhxLmiQmnNoAx3PB+Xc4xB9uT2TGqJdcK57mJrr1ED8NAAAAAAAAAAAAAAAAAAAAAAAgG/pHX6QMfGFcxraAAAAAElFTkSuQmCC' alt="arr" width='80px' height='70px'/>

                <div className='info-img-block'>
                    <img src={this.state.data.avers} alt="avers" />
                    <img src={this.state.data.revers} alt="revers" />
                </div>

                <div className="coin-info-block">
                    <h2>{this.state.data.header}</h2>
              
                    <p>{this.state.data.shortDescription}</p>
                    <p>{this.state.data.description}</p>
                    {/* <p>{this.state.data.description}</p> */}
                    <table>
                    <tbody className="tabl">
                        <tr>
                            <td>Issuing Country</td>
                            <td>{this.state.data.country}</td>
                        </tr>
                        <tr>
                            <td>Composition</td>
                            <td>{this.state.data.composition}</td>
                        </tr>
                        <tr>
                            <td>Quality</td>
                            <td>{this.state.data.quality}</td>
                        </tr>
                        <tr>
                            <td>Denomination</td>
                            <td>{this.state.data.denomination}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{this.state.data.year}</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{this.state.data.weight}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{this.state.data.price}</td>
                        </tr>
                    </tbody>
                    </table>

                </div>

            </div>
        )
    }
}


export default withRouter(CoinInfo)