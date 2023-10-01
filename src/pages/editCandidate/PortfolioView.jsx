import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getPortfolioUserById } from '../../redux/actions/bioActions';

export default function PortfolioView() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {portfolio_get} = useSelector(state => state);
  const {data} = portfolio_get;

  useEffect(() => {
    dispatch(getPortfolioUserById())
  }, [])

  return (
    <div>
      {
        data?.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.portfolio_name}</h1>
            </div>
          )
        })
      }
    </div>
  )
}
