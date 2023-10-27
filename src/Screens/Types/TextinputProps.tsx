export interface TextinputProps {
    label: string;
    placeholder?: string;
    icons?: any;
    alignIcon?: 'left'|'right';
    onChangeText?: any 
    iconSize: number;
    securityText?: boolean
}

export interface ButtonProps {
    label: string;
    onPress?: () => void
}