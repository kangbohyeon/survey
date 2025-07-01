package com.servy.user.repository

import com.servy.user.domain.Option
import org.springframework.data.jpa.repository.JpaRepository

interface OptionRepository : JpaRepository<Option, Int> {
}