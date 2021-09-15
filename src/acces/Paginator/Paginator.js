import React, {useEffect, useState} from "react";
import clas from './paginator.module.css'
import {changeLoading, DownloadFilePage, setRequestPage} from "../../redux/filePageReducer";
import {useDispatch} from "react-redux";
import {Link, useHistory, useParams} from "react-router-dom";


const Paginator = ({props}) => {
    let dispatch = useDispatch()
    let {totalItemsCount, fileType, sortType, changeSortTypeHandler,
        ReduceRequestPage, reducerPageSize} = {...props}
    let [pageZise, changePageSize] = useState(reducerPageSize);
    let portionSize = 10;

    let pagesCount = Math.ceil(totalItemsCount / pageZise)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    let [requestPage, changerequestPage] = useState(ReduceRequestPage)
    let {page} = useParams();



    function changePageSizeHandler(newPageSize) {
        newPageSize = Number(newPageSize)
        if (newPageSize === 0) {
            newPageSize = 1
        }
        let timerId = null;

        function makeChange(newPageSize) {
            changePageSize(newPageSize)
            OnPageChange(1, newPageSize)
        }

        function makeChangeWithTime(newPageSize) {
            clearTimeout(timerId)
            timerId = setTimeout(() => {
                done = false
                makeChange(newPageSize)
            }, 200)
        }

        let done = false;
        makeChangeWithTime(newPageSize)
        if (!done) {
            clearTimeout(timerId)
            makeChangeWithTime(newPageSize)
        }
        return undefined;
    }

    let startPageNumber =    Number((useHistory().location.pathname.split('=')[1]))

    const OnPageChange = (requestPage, pageZise) => {
       dispatch((changeLoading(true)))
        changerequestPage(requestPage)
        pagesCount = (Math.ceil(totalItemsCount / pageZise))
        dispatch(DownloadFilePage(fileType, sortType, ((startPageNumber - 1) * pageZise), pageZise))
        dispatch((changeLoading(false)))
    }


    useEffect(() => {
        dispatch((changeLoading(true)))
        dispatch(setRequestPage(startPageNumber ===0?1:startPageNumber))
        OnPageChange(requestPage, pageZise)
    }, [dispatch,fileType,sortType,requestPage,pageZise])

    return <div className={clas.pagintotrFolder}>
        <div className={clas.leftItem}>

            <div >кількість сторінок:<span className={clas.itemValue}>{pagesCount}</span></div>

            <div>розмір сторінки: <span className={clas.itemValue}>{
                <input className={clas.inp}
                       value={pageZise}
                       type="number" placeholder='змінити  розмір'
                       onChange={event => changePageSizeHandler(event.currentTarget.value)}

                />}
            </span></div>

        </div>
        <div className={clas.item}>
            {portionNumber > 1 && <button className={clas.inp} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            <div className={clas.numberPages}>
                {pages
                    .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return(
                            <Link key={p}
                                onClick={(e) => {OnPageChange(p, pageZise);}}
                                className={p === Number (page) ? clas.numberOneActivPages : clas.numberOnePages}
                                  to={'page=' + String(p)}>
                            <div >
                                    {p}
                            </div>
                    </Link>

                    )
                    })}
            </div>

            {
                portionCount > portionNumber &&
                <button className={clas.inp} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}
        </div>

        <div className={clas.item}>
            сортувати за:
            <div className={clas.sortType} onClick={changeSortTypeHandler}>
                <button>
                    {sortType === 'ASC' ? <span>зростанням</span> : <span>спаданням</span>}
                </button>
            </div>


        </div>

    </div>
}

export default Paginator







