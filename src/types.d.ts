// General types go here
import { CSSProperties } from 'react';

export interface Styled {
   className?: string;
   style?: CSSProperties;
}

export interface AnyObject {
   [propName: string]: unknown;
}
