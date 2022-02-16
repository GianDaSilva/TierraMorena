import React from 'react';
import Icon1 from '../../images/truck.png'
import Icon2 from '../../images/excavator (1).png'
import Icon3 from '../../images/tow-truck.png'



import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Nuestros servicios</ServicesH1> 
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Suelo seleccionado</ServicesH2>
                        <ServicesP>Comercializacion de tosca, tierra negra y greda.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Movimiento de suelos</ServicesH2>
                        <ServicesP>Loteos, urbanizaciones y movimiento de suelos.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Alquiler de maquinas</ServicesH2>
                        <ServicesP>Alquiler de maquinas viales y carretones.</ServicesP>
                    </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
