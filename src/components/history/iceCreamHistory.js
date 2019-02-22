import React, { Component } from 'react'

const facts = ["The origins of Ice Cream likely date back to the First Persion Empire circa 500bc, when ice was combined with flavors for a summertime treat.",
"History notes that during the 5th century BC, ancient Greeks ate snow mixed with honey and fruit in the markets of Athens. The father of modern medicine, Hippocrates, encouraged his Ancient Greek patients to partake “as it livens the life-juices and increases the well-being.”",
"Legend states that when the Italian duchess Catherine de’ Medici married the Duke of Orléans (Henry II of France) in 1533, her Italian chefs accompanied her with their recipes for flavoured ices or sorbets. About 100 years later, Charles I of England got a taste of the delicacy. He  was so impressed by the “frozen snow” that he offered a lifetime pension to his own chef if he would keep the formula secret so that only the royals would have access to exquisite treat.",
"Something about Galen’s icecream and a taste worthy of royalty but for everyone..."]

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fact: 0
        }

        this.handleNext = this.handleNext.bind(this)
    }

    handleNext() {
        this.setState({
            fact: this.state.fact != 3 ? ++this.state.fact : 0
        })
    }

    render() {
        return (
            <div className="ice-cream-history">
                <h2>A Brief History of Ice Cream</h2>

                <ul>
                    <li>{facts[this.state.fact]}</li>
                </ul>

                <button onClick={this.handleNext}>Next</button>

            </div>
        )
    }
}