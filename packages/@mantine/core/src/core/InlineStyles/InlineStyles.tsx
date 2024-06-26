import { useMantineStyleNonce } from '../MantineProvider';
import { InlineStylesInput, stylesToString } from './styles-to-string/styles-to-string';

export interface InlineStylesProps
  extends InlineStylesInput,
    Omit<React.ComponentPropsWithoutRef<'style'>, keyof InlineStylesInput> {}

export function InlineStyles({ selector, styles, media }: InlineStylesInput) {
  const nonce = useMantineStyleNonce();
  return (
    <style
      data-mantine-styles="inline"
      nonce={nonce?.()}
      dangerouslySetInnerHTML={{ __html: stylesToString({ selector, styles, media }) }}
    />
  );
}
