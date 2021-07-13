// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LikeOutlinedSvg from '../asn/LikeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LikeOutlined = (
  props: AntdIconProps,
  ref: React.ForwardRefExoticComponent<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LikeOutlinedSvg} />;

LikeOutlined.displayName = 'LikeOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LikeOutlined);
