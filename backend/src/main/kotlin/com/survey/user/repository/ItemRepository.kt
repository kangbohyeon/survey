package com.survey.user.repository

import com.survey.user.domain.Item
import org.springframework.data.jpa.repository.JpaRepository

interface ItemRepository : JpaRepository<Item,Int> {
}