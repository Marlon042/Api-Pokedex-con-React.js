import React, { useState, useEffect } from 'react';

const withDataFetching = (WrappedComponent, fetchData) => {
  return (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
      const fetchAPI = async () => {
        try {
          const data = await fetchData();
          setData(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchAPI();
    }, []);

    return (
      <WrappedComponent
        data={data}
        loading={loading}
        error={error}
        {...props}
      />
    );
  };
};

export default withDataFetching;
