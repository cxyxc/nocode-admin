import { useRef } from 'react';
import { useLocation } from 'umi';

export default function useRouteChange(fn?: Function) {
  const lastPathnameRef = useRef('');
  const { pathname }: any = useLocation();

  if (fn && lastPathnameRef.current && lastPathnameRef.current !== pathname) fn();
  lastPathnameRef.current = pathname;
}
