import { Assistant } from '@petercatai/assistant';
import '@petercatai/assistant/style';

export default function AIAssistant(): JSX.Element {
  return <Assistant apiDomain='https://api.petercat.ai' token="f9a8ef79-de2f-4916-92d9-80faa96fcb81" />;
};
