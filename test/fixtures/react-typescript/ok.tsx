import type {FC} from 'react';

type Props = {
  name: string;
}

export const Example: FC<Props> = props => {
 return(
	<h1>Hello, ${props.name} !</h1>
 )
}
