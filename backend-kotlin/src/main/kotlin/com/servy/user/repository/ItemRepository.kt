package com.servy.user.repository

import com.servy.user.domain.Item
import org.springframework.data.jpa.repository.JpaRepository

interface ItemRepository : JpaRepository<Item,Int> {
}