/**
 * Created By brand On 2018/2/2
 */
import React, {Component} from 'react'
import Pagecomponent from '../components/Pagecomponent'
import data from '../mock/tsconfig.json'

class Pagecontainer extends Component {
    constructor() {
        super()
        this.state = {
            dataList:[],
            pageConfig: {
                totalPage: data.length //总页码
            }
        }
        this.getCurrentPage = this.getCurrentPage.bind(this)
    }
    getCurrentPage(currentPage) {
        this.setState({
            dataList:data[currentPage-1].name
        })
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.dataList}
                </div>
                <Pagecomponent pageConfig={this.state.pageConfig}
                               pageCallbackFn={this.getCurrentPage}/>
            </div>

        )
    }
}
export default Pagecontainer