import React from 'react';

// const tabList = this.props.tabs.map((tab, idx) => {
//     return (<li key={idx}>
//         <h1>{tab.title}</h1>
//         <article>{tab.content}</article>
//     </li>);
// });

// return (
//     <>
//         <ul>
//             {tabList}
//         </ul>
//     </>
// );

class Headers extends React.Component {
    render() {
        const selected = this.props.id;
        const headers = this.props.tabs.map((tab, ind) => {
            const title = tab.title;
            const nameOfClass = ind === selected ? 'active' : "";

            return (
                <li
                    key={ind}
                    className={nameOfClass}>
                    onClick={() => this.props.onTabChosen(ind)}>
                    {title}{' '}
                </li>
            );
        });
        return (
            <ul className='tab-header'>
                {headers}
            </ul>
        );
    }
}

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: 0};
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(num) {
        this.setState({id: num});
    }

    render() {
        const tab = this.props.tabs[this.state.id];
        return (
            <>
                <h1>Tabs</h1>
                <div className='tabs'>
                    <Headers
                        selectedPane ={this.state.id}
                        onTabChosen={this.selectTab}
                        panes={this.props.tabs}>
                    </Headers>
                    <div className='tab-content'>
                        <article>
                            {tab.content}
                        </article>
                    </div>
                </div>
            </>
        )
    }
}