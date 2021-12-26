import React, {useState} from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./faq.css";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
const Faq = ({tabs}) => {
  const [activeTab, setActiveTab] = useState([])

  return (
      <Accordion allowZeroExpanded onChange={(id)=>setActiveTab(id)}>
      {tabs.map((tab,index)=> <AccordionItem key={index} uuid={index} style={{boxShadow: activeTab[0] === index && "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"}}> 
                <AccordionItemHeading>
                    <AccordionItemButton style={{background: activeTab[0] === index && "white", borderRadius: activeTab[0] === index && "10px 10px 0 0" }}>
                      <div className="tab__button">
                        <p className="tab__button-icon">
                          <AccordionItemState>
                            {({ expanded }) => (expanded ? <AiOutlineMinus style={{color:"#FD5757"}}/> : <AiOutlinePlus style={{color: "#1B1139"}} />)}
                          </AccordionItemState>
                        </p>
                        <p className="tab__header">{tab.title}</p>
                      </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>{tab.description}</p>
                </AccordionItemPanel>
            </AccordionItem>)}
        </Accordion>
  )
}

export default Faq
