import React from 'react';
import SectionName from "../SectionName/SectionName";
import { ContractFaqs, ContractWeapons } from "./WeaponsForContractsSection.styles";
import { useDispatch, useSelector } from "react-redux";
import WeaponCard from "../WeaponCard/WeaponCard";
import { addToContractRouletteActionCreator } from "../../reducers/contractsReducer";
import { Link } from "react-router-dom";
import FAQOption from "../FAQOption/FAQOption";
import ContractsError from "../ContractsError/ContractsError";

const options = [
    {
        id: 1,
        img: 'https://givedrop.su/images/icon/icon-case.svg',
        text: 'Открывайте кейсы'
    },
    {
        id: 2,
        img: 'https://givedrop.su/images/icon/icon-contracts.svg',
        text: 'Положите любые предметы в контракт'
    },
    {
        id: 3,
        img: 'https://givedrop.ru/images/icon/icon-weapon.svg',
        text: 'Получите рандомный предмет'
    },
    {
        id: 4,
        img: 'https://givedrop.ru/images/icon/icon-check.svg',
        text: 'Получите предмет от нашего бота или продайте сайту по цене Steam'
    },
]

const WeaponsForContractsSection = () => {
    const contractWeapons = useSelector(({contracts}) => contracts.contracts);
    const dispatch = useDispatch();

    const addToContract = weapon => {
        dispatch(addToContractRouletteActionCreator(weapon));
    }
    return (
        <div>
            <SectionName name='Доступные для контракта предметы' color='#fff' hideBefore/>
            {contractWeapons.length
                ?
                <ContractWeapons>
                    {contractWeapons.map(weapon => (
                        <WeaponCard addToContract={addToContract} key={weapon.timestamp} weapon={weapon} contracts/>
                    ))}
                </ContractWeapons>
                :
                <ContractsError>
                    <span>Отсутствуют предметы для контракта</span>
                    <span>
                        <Link to='/'>Откройте несколько кейсов</Link>,
                        вернитесь на эту страницу и вы сможете создать контракт
                    </span>
                </ContractsError>
            }
            <ContractFaqs>
                {options.map(option => (
                    <FAQOption key={option.id} img={option.img} text={option.text} last={option.id === options.length}/>))}
            </ContractFaqs>
        </div>
    );
};

export default WeaponsForContractsSection;
