/*-
 *
 * NFT Rarity Inspector
 *
 * Copyright (C) 2024 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { MetadataObject, TraitOccurrence } from '@hashgraph/hedera-nft-sdk';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Header } from '@/components/pages/NFTDetailsDialog/Dialog/Header';
import { Footer } from '@/components/pages/NFTDetailsDialog/Dialog/Footer';
import { MainContent } from '@/components/pages/NFTDetailsDialog/Dialog/MainContent';
import { useMetadata } from '@/utils/contexts/MetadataContext';

export const NFTDetails = ({
  metadataObject,
  totalRarity,
  fileName,
  activeId,
  handlePrevious,
  handleNext,
  traitOccurrence,
  hasNextPrevButtons,
  setIsModalOpen,
  isModalOpen,
  rarityRank,
  nftNumber,
}: {
  metadataObject: MetadataObject;
  totalRarity: string;
  fileName: string;
  activeId: number;
  handlePrevious: () => void;
  handleNext: () => void;
  traitOccurrence: TraitOccurrence[];
  hasNextPrevButtons: boolean;
  setIsModalOpen: (_isOpen: boolean) => void;
  isModalOpen: boolean;
  rarityRank: number;
  nftNumber: number;
}) => {
  const { totalMetadataLength, filteredAndSortedMetadataLength, metadata } = useMetadata();
  return (
    <Dialog onOpenChange={setIsModalOpen} open={isModalOpen}>
      <DialogContent className="flex max-h-screen max-w-[1600px] flex-col justify-center md:h-[900px]">
        <Header fileName={fileName} />
        <MainContent
          activeId={nftNumber}
          totalRarity={totalRarity}
          rarityRank={rarityRank}
          metadataRows={metadata}
          metadataObject={metadataObject}
          traitOccurrence={traitOccurrence}
          totalMetadataLength={totalMetadataLength}
        />
        {hasNextPrevButtons && (
          <Footer
            activeId={activeId}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            filteredAndSortedMetadataLength={filteredAndSortedMetadataLength}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
