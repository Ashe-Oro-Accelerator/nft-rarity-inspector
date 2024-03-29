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
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { useMemo } from 'react';
import { MetadataRow } from '@/utils/types/metadataRow';
import { calculateTraitOccurrenceFromData } from 'hedera-nft-utilities/src/rarity';
import { findNFTRarity } from '@/components/pages/DropzonePage/findNFTRarity';
import { findMostAndLeastRareAttribute } from '@/components/pages/DropzonePage/findMostAndLeastRareAttribute';
import { findNFTsWithAttribute } from '@/components/pages/DropzonePage/findNFTsWithAttribute';

export const useNFTRarityData = (metadata: MetadataRow[]) => {
  const traitOccurrence = useMemo(() => calculateTraitOccurrenceFromData(metadata.map((m) => m.metadata)), [metadata]);
  const mostRareNFT = findNFTRarity(metadata, 'most-rare');
  const leastRareNFT = findNFTRarity(metadata, 'least-rare');
  const { mostRareAttribute, leastRareAttribute } = findMostAndLeastRareAttribute(metadata);
  const { nftsWithAttribute: nftsWithLeastRareAttribute, count: countLeastRare } = findNFTsWithAttribute(metadata, leastRareAttribute);
  const { nftsWithAttribute: nftsWithMostRareAttribute, count: countMostRare } = findNFTsWithAttribute(metadata, mostRareAttribute);

  return {
    traitOccurrence,
    mostRareNFT,
    leastRareNFT,
    mostRareAttribute,
    leastRareAttribute,
    nftsWithLeastRareAttribute,
    nftsWithMostRareAttribute,
    countLeastRare,
    countMostRare,
  };
};