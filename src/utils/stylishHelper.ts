import classnames from 'classnames'
import { NodeExtraClassNames, getCompiledClassNames } from '../hooks/useExtraClassName';
import { NodeExtraStyles, getCompiledStyles } from '../hooks/useExtraStyle';

function compileNodeName(nodeNames: (string | undefined)[], options?: {
  prefix?: string,
  separator?: string,
}) {
  return [options?.prefix, ...nodeNames].filter((i) => i && i.length > 0).join(options?.separator || '-')
}

export function initStylish<T extends string>(
  rootNodeName: string,
  props?: {
    overrideClassName?: NodeExtraClassNames<T>,
    extendClassName?: NodeExtraClassNames<T>,
    initialClassName?: NodeExtraClassNames<T>,

    overrideStyle?: NodeExtraStyles<T>,
    extendStyle?: NodeExtraStyles<T>,
    initialStyle?: NodeExtraStyles<T>,
  },
  options?: {
    prefix?: string,
    separator?: string,
  }
) {
  return (nodeName: string, classNames: (string | undefined)[] = []) => {
    return {
      className: getCompiledClassNames<T>(nodeName, compileNodeName([rootNodeName, nodeName], options), classnames(classNames), props),
      style: getCompiledStyles<T>(nodeName, props)
    }
  }
}

export { ExtraClassNameProps } from '../hooks/useExtraClassName';;
export { ExtraStyleProps } from '../hooks/useExtraStyle';;