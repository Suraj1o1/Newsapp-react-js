import React,{useEffect,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Newscom =(props)=> {
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)


  
  const updatenews=async()=> {
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=cc6f1192f0954c3b9ae77c1ceb9bcab3&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setprogress(30);
    let parseddata = await data.json();
    props.setprogress(70);
    setArticles(parseddata.articles)
    setTotalResults(parseddata.totalResults)
    setLoading(false)
    
    props.setprogress(100);
  }
  useEffect(() => {
     /* eslint-disable */
   updatenews();
  },[]);

  //  componentDidMount=async()=> {
  //   this.updatenews();
  // }
//  const Handlenext = async () => {
//     console.log("hello");
//     if (
//       !(
//         this.state.page + 1 >
//         Math.ceil(this.state.totalResults / props.pageSize)
//       )
//     ) {
//     }

//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${
//       props.category
//     }&apikey=cc6f1192f0954c3b9ae77c1ceb9bcab3&page=${
//       this.state.page + 1
//     }&pageSize=${props.pageSize}`;
//     // let url=`https://newsdata.io/api/1/news?&country=${props.country}&apikey=pub_148792469189c3d9e420c75c54776276c81ed&page=${this.state.page+1}&pageSize=${props.PageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parseddata = await data.json();
//     // this.setState({loading:false});
//     this.setState({
//       page: this.state.page + 1,
//       articles: parseddata.articles,
//       loading: false,
//     });
//   };
//  const Handleprev = async () => {
//     console.log("hello");
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${
//       props.category
//     }&apikey=cc6f1192f0954c3b9ae77c1ceb9bcab3&page=${
//       this.state.page - 1
//     }&pageSize=${props.pageSize}`;
//     // let url=`https://newsdata.io/api/1/news?&country=${props.country}&apikey=pub_148792469189c3d9e420c75c54776276c81ed&page=${this.state.page-1}&pageSize=${props.PageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parseddata = await data.json();
//     console.log(parseddata);
//     this.setState({
//       page: this.state.page - 1,
//       articles: parseddata.articles,
//       loading: false,
//     });
//   };
 const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=cc6f1192f0954c3b9ae77c1ceb9bcab3&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticles(articles.concat(parseddata.articles))
    setTotalResults( parseddata.totalResults)
    console.log(parseddata);
    
  };
    return (
      <>
        <u>
          <h2 className="text-center my-5 " style={{margin:'35px 0px',margintop:'90px'}}>
            1o1 Top Headlines on {props.category}
          </h2>
        </u>
        {loading && <Spinner/>} <br />
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        ><div className="container my-3">

          <div className="row">
            { 
              articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 33) : ""}
                      des={
                        element.description
                          ? element.description.slice(0, 88)
                          : "you can read more Never miss a moment with the latest news, trending stories and highlights to bring you c"
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://www.reuters.com/resizer/z7gzied9hwXKRl9NQ8sh9MSPJFQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EREJDT2HCZMZXFDPSX5H72KITA.jpg"
                      }
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        </InfiniteScroll>
        </>

        /*         
          <div className="container d-flex justify-content-evenly">
  
            <button type='button' disabled={state.page<=1} className="btn-hover color-1" onClick={this.Handleprev}>&larr; Previous</button>
            
            <button type='button' className="btn-hover color-2" onClick={Handlenext}>Next &rarr;</button>

         </div> */
      
    );
  }
Newscom.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};
Newscom.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Newscom;
