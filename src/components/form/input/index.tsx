import * as Styles from './styles';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}

export function Input (props: IProps) {
    return (
        <Styles.Container>
            <Styles.Field 
                type={props.type} 
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                hasError={props.hasError}
            />
        </Styles.Container>
    );
}