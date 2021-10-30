import React from 'react'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>You can acces our platform online  anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
                
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
