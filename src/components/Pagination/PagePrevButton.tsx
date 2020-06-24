import React, { useContext } from 'react';
import { Button as UUIButton } from '../Button';
import { UUI } from '../../core/uui';
import { Icons } from '../../icons/Icons';
import { PaginationContext } from './Pagination';

export interface BasePagePrevButtonProps {
}

export const PagePrevButton = UUI.FunctionComponent({
  name: 'PagePrevButton',
  nodes: {
    Root: UUIButton,
  }
}, (props: BasePagePrevButtonProps, nodes) => {
  const { Root } = nodes

  const pagination = useContext(PaginationContext)
  if (!pagination) {
    console.warn('[UUI] please use <PagePrevButton> in <Pagination>')
    return <></>
  }

  return (
    <Root
      disabled={pagination.currentPage === 1}
      onClick={() => { pagination.toPrevPage() }}
    >
      <Icons.ChevronLeft></Icons.ChevronLeft>
    </Root>
  )
})

export type PagePrevButtonProps = Parameters<typeof PagePrevButton>[0]
