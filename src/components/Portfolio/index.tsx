import React from 'react';

import './styles.scss';

import { X } from 'lucide-react';

import { useAppContext } from '../../context/AppContext';

import GlassOverlay from '../GlassOverlay';

import json from '../../utils/data.json';
import type { PortfolioType } from '../../utils/Types';
import PortfolioCard from '../PortfolioCard';

const {portfolio} = JSON.parse(JSON.stringify(json));

export default function Index() {
    const {setShowPortfolio} = useAppContext();

    const handleXClick = (e:React.MouseEvent) => {
        e.preventDefault();

        setShowPortfolio(false);
    }

    return(
        <div className="portfolio-container">
            <GlassOverlay style={{position: 'absolute', inset: '0 0 0 0', zIndex: -1}}/>
            <div className="x-container" onClick={handleXClick}>
                <X />
            </div>
            <div className="portfolio-wrapper">
                <div className="portfolio-card-group">
                    {
                        portfolio.map((data: PortfolioType) => (
                            <PortfolioCard key={React.useId()} data={data}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}