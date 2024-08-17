import { useEffect, useState } from 'react';
import useBATHFinance from '../useBATHFinance';
import useRefresh from '../useRefresh';
import { PoolInfo } from '../../tomb-finance/types';

const usePoolInfoByPid1 = (pId: Number) => {
  const [stat, setStat] = useState<PoolInfo>();
  const { fastRefresh } = useRefresh();
  const bathFinance = useBATHFinance();

  useEffect(() => {
    async function fetchPoolInfo() {
      try {
        setStat(await bathFinance.getPoolInfoByPid1(pId));
      }
      catch (err) {
        console.error(err)
      }
    }
    fetchPoolInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setStat, bathFinance, fastRefresh]);

  return stat;
};

export default usePoolInfoByPid1;