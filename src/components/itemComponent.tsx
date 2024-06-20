import React from 'react';
import './itemComponentCss.css';

interface Item {
    id: number;
    title: string;
    author: string;
    pages: number;
}

interface ItemComponentState {
    items: Item[];
    DataisLoaded: boolean;
}

class ItemComponent extends React.Component<object, ItemComponentState> {
    constructor(props: object) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }

    componentDidMount() {
        fetch("http://localhost:8081/getBooks")
            .then((res) => res.json())
            .then((json) => {
                if (Array.isArray(json)) {
                    this.setState({
                        items: json,
                        DataisLoaded: true,
                    });
                } else {
                    console.error("API did not return an array:", json);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    render() {
        const {DataisLoaded, items} = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1>Please wait some time....</h1>
                </div>
            );

        return (
            <div className="itemComponentStyle">
                <h1 className="geeks">GeeksforGeeks</h1>
                <h3>Fetch data from an API in React</h3>
                <div className="container">
                    {items.map((item: Item) => (
                        <button className="item" key={item.id} onClick={() => alert(`Clicked on ${item.title}`)}>
                            <ol>
                                <div>
                                    <strong>Title: </strong>
                                    {item.title},
                                </div>
                                <div>
                                    Author: {item.author},
                                </div>
                                <div>
                                    Pages: {item.pages}
                                    Pages: {item.pages}
                                </div>
                            </ol>
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default ItemComponent;
